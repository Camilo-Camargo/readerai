echo "Readeria Setup v0.0.1"

root_path=pwd
python_path=".readerai/bin/python"

echo "Creating Python environment..."
python -m venv .readerai

echo "Installing requirements..."
echo "Python version: $($python_path --version)"
$python_path -m pip install -r requirements.txt

echo "Done"

